import s from "./LoadMoreBtm.module.css";

const LoadMoreBtn = ({ setPage }) => {
  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className={s.downline}>
      <button className={s.btn} onClick={handleChangePage}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
