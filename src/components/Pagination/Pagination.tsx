import { Pagination as MUIPagination } from "@material-ui/lab";

const RESULTS_PER_PAGE = 10;

type PaginationProps = {
  total: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<PaginationProps> = ({ total, page, setPage }) => {
  // the "+" sign is a trick so TypeScript leaves me alone
  const count = Math.round(+total / RESULTS_PER_PAGE);

  const handleChange = (value: number) => {
    window.scrollTo(0, 0);
    setPage(value);
  };

  return (
    <nav>
      <MUIPagination
        page={page}
        count={count}
        onChange={(_, value) => handleChange(value)}
      />
    </nav>
  );
};

export default Pagination;
