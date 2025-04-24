import Badge from "./Badge";
import styles from "./ListItem.module.css";
import { ListItem as ListItemType } from "../model/issues";
import ListItemLayout from "./ListItemLayout";
import dayjs from "dayjs";

interface Props {
    checked: boolean;
    onClickTitle?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    data: ListItemType,
    onClickCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ListItem({
  checked,
  onClickCheckBox,
  onClickTitle,
  data
}: Props) {
  const badges = data.labels;
  const state = data.state === 'open' ? 'opened' : 'closed';
  const date = data.state === 'open' ? data.created_at : data.closed_at;

  return (
    <ListItemLayout checked={checked} onClick={onClickCheckBox}>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 && badges.map((props) => <Badge key={props.name} {...props} />)}
        </div>
        <div className={styles.description}>#{data.number} {state} {dayjs(date).fromNow()} by {data.user.login}</div>
      </div>
    // </ListItemLayout>
  );
}
