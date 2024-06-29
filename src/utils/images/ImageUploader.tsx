import { setUserData } from "@/src/redux/features/User.Slice";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import Image from "next/image";
import { useState, ChangeEvent, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloudUpload } from "react-icons/ai"; // Importing the upload icon

const UploadPage: React.FC = () => {
  const user: any = useSelector((state: any) => state.User.UserInfo);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(user?.profile_image || null);

  useEffect(() => {
    setImageUrl(user?.profile_image || null);
  }, [user]);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      await uploadImage(selectedFile);
      event.target.value = "";
    }
  };

  const uploadImage = async (file: File) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await API_DOMAIN.post("/api/v1/auth/Upload-Profile-Image", formData);
      const data = response.data;

      if (data.status) {
        const newImageUrl = data.url;

        const updateResponse = await API_DOMAIN.post("/api/v1/auth/Update-Profile-image", {
          userId: user._id,
          imageUrl: newImageUrl,
        });

        setImageUrl(updateResponse.data.data.profile_image);
        dispatch(setUserData(updateResponse.data.data));
      } else {
        toast.error(data.message || "Error uploading the file.");
      }
    } catch (error) {
      console.error("Error uploading the file:", error);
      toast.error("Error uploading the file. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormClick = () => {
    document.getElementById("input")?.click();
  };

  return (
    <div className="relative z-50">
      <form id="Profile_Image_Uploader" onSubmit={(e) => e.preventDefault()} hidden>
        <input
          id="input"
          type="file"
          onChange={handleFileChange}
          accept=".png,.jpg,.jpeg"
          style={{ display: "none" }}
        />
      </form>

      <div onClick={handleFormClick} className="relative cursor-pointer">
        <Image
          width={130}
          height={130}
          src={imageUrl || "/images/placeholder.png"}
          alt="Profile Image"
          // className="w-24"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-gray-600 bg-opacity-60 hover:opacity-100">
          <AiOutlineCloudUpload className="text-white text-3xl cursor-pointer" />
        </div>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-60">
            <Image
              width={130}
              height={130}
              src={"/images/Profile_Image_Uploader_loading.gif"}
              alt="Loading"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
