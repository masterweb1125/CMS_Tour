import { CSVLink } from 'react-csv';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Button, ButtonGroup, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import SearchInput from '@/src/components/dashboard/dashboardComponents/SearchInput';
import { GetAllDiscounts } from '@/src/redux/service/AdminApi';

const columns = [
  '#',
  'Name',
  'Discount',
  'Max limit',
  'Used limit',
  'Status',
  'Expiration',
  'Action',
];

function DiscountGrid() {
  const [discount, setDiscount] = useState([]);

  // Fetch discounts from API
  const fetchDiscounts = async () => {
    try {
      const res = await GetAllDiscounts();
      setDiscount(res);
    } catch (error) {
      console.error('Error fetching discounts:', error);
    }
  };

  useEffect(() => {
    fetchDiscounts();
  }, []);

  // Format expiration date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC',
    };
    return date.toLocaleDateString('en-US', options);
  };

  // Check if date has passed
  const checkDateStatus = (targetDate) => {
    const currentDate = new Date();
    const dateToCheck = new Date(targetDate);
    return dateToCheck >= currentDate;
  };

  // CSV export function
  const handleExportCSV = () => {
    const csvData = discount.map((item, index) => ({
      '#': index + 1,
      'Name': item.name,
      'Discount': `${item.value}%`,
      'Max limit': item.usageLimit,
      'Used limit': item.timesUsed,
      'Status': item.isActive ? 'Active' : 'Inactive',
      'Expiration': formatDate(item.expirationDate),
    }));

    // Generate CSV file
    const headers = columns.map((column) => ({ label: column, key: column }));
    const csvReport = {
      data: csvData,
      headers: headers,
      filename: 'discounts.csv',
    };

    return <CSVLink {...csvReport}><button className=''>CSV Export</button></CSVLink>;
  };

  return (
    <div className="border pt-8 rounded-lg">
      <Grid container mb={3} spacing={3} px={3}>
        <Grid item xs={12} md={9}>
          <div className="border-t-4 border-[#FFA500] w-24 " />
          <p className="text-[#344054] text-lg font-semibold pt-4">
            Discount History
          </p>
          <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
            Select user which you want to add something or deduct
          </h6>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className="flex justify-between gap-3">
            <SearchInput />
            <svg
              width="40"
              height="34"
              viewBox="0 0 40 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="43"
                rx="7.5"
                stroke="#D0D5DD"
              />
              <path
                d="M15 22H25M12.5 17H27.5M17.5 27H22.5"
                stroke="#667085"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Grid>

        <Grid item xs={12} className="flex items-end justify-end">
          <ButtonGroup
            variant="contained"
            className="bg-[#FFA500] px-3 py-2 text-white"
            color="inherit"
          >
            {handleExportCSV()}
          </ButtonGroup>
        </Grid>

        <Grid item xs={12}>
          <div className="relative overflow-x-auto border rounded-md pb-3 pr-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {columns.map((item, index) => (
                    <th scope="col" key={index} className="px-6 py-3">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {discount.length > 0 &&
                  discount.map((item, i) => (
                    <tr
                      key={item._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4 font-medium">{i + 1}</td>
                      <td className="px-6 py-4 font-medium">{item.name}</td>
                      <td className="px-6 py-4 font-medium">
                        {item.value + '%'}
                      </td>
                      <td className="px-6 py-4 font-medium">{item.usageLimit}</td>
                      <td className="px-6 py-4 font-medium">{item.timesUsed}</td>
                      <td className="px-6 py-4 font-medium">
                        {item.isActive ? 'Active' : 'Inactive'}
                      </td>
                      <td
                        className="px-6 py-4 font-medium"
                        style={{
                          color: checkDateStatus(item.expirationDate)
                            ? '#687586'
                            : 'red',
                        }}
                      >
                        {formatDate(item.expirationDate)}
                      </td>
                      <td className="px-6 py-4 font-medium">
                        <BsThreeDotsVertical />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="text-end pt-5 text-[#353535] font-semibold cursor-pointer select-none">
              View All
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default DiscountGrid;

