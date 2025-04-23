import styles from "./OpenClosedFilters.module.css";
import cx from "clsx";

export default function OpenClosedFilters({ isOpenMode, onClickMode }) {
//   const openModeDataSize = 1;
//   const closeModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        // size={openModeDataSize}
        state="Open"
        onClick={() => onClickMode(true)}
        selected={isOpenMode}
      />
      <OpenClosedFilter
        // size={closeModeDataSize}
        state="Closed"
        onClick={() => onClickMode(false)}
        selected={!isOpenMode}
      />
    </>
  );
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  );
}
