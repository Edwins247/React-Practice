import styles from './OpenClosedFilters.module.css';

import cx from "clsx";

interface Props {
    state: string;
    onClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
    selected: boolean;
}


function OpenClosedFilter({ state, onClick, selected }: Props) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {state}
    </span>
  );
}

interface FiltersProps {
    isOpenMode: boolean;
    onClickMode: (v: string) => void
}

export default function OpenClosedFilters({ isOpenMode, onClickMode }: FiltersProps) {

  return (
    <>
      <OpenClosedFilter
        state="Open"
        onClick={() => onClickMode("open")}
        selected={isOpenMode}
      />
      <OpenClosedFilter
        state="Closed"
        onClick={() => onClickMode("closed")}
        selected={!isOpenMode}
      />
    </>
  );
}
