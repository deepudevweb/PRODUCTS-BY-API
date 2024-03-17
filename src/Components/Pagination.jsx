import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




export default function PaginationRounded() {

  const handlePaginationChange = (event, page) => {
    // If the second pagination item (page === 2) is clicked, navigate to Pagetwo component
    if (page === 2) {
      history.push('../Components/Pages/pagetwo');
    }
  };

  return (
    <div className="pagi">
      <div className="pagi-inner">
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" shape="rounded" onChange={handlePaginationChange} />
        </Stack>
      </div>
    </div>
  );
}
