import s from "./LoadMoreBtm.module.css";
interface LoadMoreBtnProps {
  setPage: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ setPage }) => {
  // const handleChangePage = () => {
  //   setPage((prev) => prev + 1);
  // };
  return (
    <div className={s.downline}>
      <button className={s.btn} onClick={setPage}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
