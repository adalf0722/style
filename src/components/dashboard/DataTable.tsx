import { Table } from "../common/Table";

const headers = ["Campaign", "Status", "CTR", "Spend"];
const rows = [
  ["Nebula Pulse", "Live", "4.2%", "$12.4K"],
  ["Sunrise Lane", "Paused", "2.8%", "$8.1K"],
  ["Holo Market", "Live", "5.1%", "$18.9K"],
];

export const DataTable = () => {
  return <Table headers={headers} rows={rows} />;
};
