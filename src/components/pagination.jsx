import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationItem } from "@mui/material";

export default function BasicPagination() {
  return (
    <Stack spacing={1}>
      <PaginationItem count={10} color="primary" />
    </Stack>
  );
}
