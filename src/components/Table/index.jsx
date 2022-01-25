import React from "react";
import PropTypes from "prop-types";
import {
  Table as MTable,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { StyledTableCellHead } from "./style";

const Table = ({ headlines, rows }) => {
  return (
    <TableContainer component={Paper}>
      <MTable>
        <TableHead>
          <TableRow>
            {headlines.map((head) => (
              <StyledTableCellHead align="left" key={head}>
                {head}
              </StyledTableCellHead>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </MTable>
    </TableContainer>
  );
};

Table.propTypes = {
  headlines: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.node,
  actionsKeys: PropTypes.arrayOf(PropTypes.string)
};

Table.defaultProps = {
  headlines: [],
  actionsKeys: []
};

export default Table;
