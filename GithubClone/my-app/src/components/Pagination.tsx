import styles from "./Pagination.module.css";

import cx from "clsx";

interface OnClickProps {
    onClick: (page: number) => void;
}

interface PageButtonProps extends OnClickProps{
  number: number;
  selected: boolean;
}

function PageButton({ number, onClick, selected }: PageButtonProps) {
  return (
    <button
      type="button"
      className={cx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
}

interface Props extends OnClickProps{
  maxPage: number;
  currentPage: number;
}

export default function Pagination({
  currentPage,
  maxPage,
  onClick,
}: Props) {
  return (
    <div>
      <button
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === 1}
      >
        {"< Previous"}
      </button>
      {new Array(maxPage).fill(null).map((_, i) => (
        <PageButton
          key={i + 1}
          number={i + 1}
          onClick={onClick}
          selected={i + 1 === currentPage}
        />
      ))}
      <button
        type="button"
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === maxPage}
      >
        {"Next >"}
      </button>
    </div>
  );
}
