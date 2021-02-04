const RESULTS_PER_PAGE = 10;

const Pagination: React.FC<{ total: number }> = ({ total }) => {
  // the "+" sign is a trick so TypeScript leaves me alone
  const pages = Math.round(+total / RESULTS_PER_PAGE);
  return (
    <div>
      <h4>{`Pages: [${pages}]`}</h4>
    </div>
  );
};

export default Pagination;
