import { auth, googleProvider } from '../../../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export async function POST(req, res) {
  // if (req.method !== 'POST') {
  //   res.setHeader('Allow', ['POST']);
  //   return res.status(405).end(`Method ${req.method} Not Allowed`);
  // }

  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const user = result.user;
    const tokenResponse = result._tokenResponse;

    const userData = {
      user,
      tokenResponse,
    };

    res.status(200).json(userData);
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    res.status(500).json({ error: error.message });
  }
}
