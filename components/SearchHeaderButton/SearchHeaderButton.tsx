import { SearchOutlined } from '@ant-design/icons';

type SearchHeaderButtonProps = {
    onClick: () => void
}

const SearchHeaderButton = ({
    onClick,
}: SearchHeaderButtonProps): JSX.Element => (
    <SearchOutlined
        className="search-icon"
        onClick={onClick}
    />
);

export default SearchHeaderButton;
