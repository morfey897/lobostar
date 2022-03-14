import { InputBase, IconButton } from '@mui/material';
import SearchIcon from "../../public/assets/icons/search.svg";

function SearchInput({ placeholder }) {
  return <InputBase
    sx={{
      borderRadius: 46,
      position: 'relative',
      background: "rgba(255, 255, 255, 0.2)",
      border: '1px solid #ffffff',
      fontSize: 16,
      lineHeight: "20px",
      width: '255px',
      padding: '0 30px',
      height: "40px"
    }}
    placeholder={placeholder}
    endAdornment={<IconButton>
      <SearchIcon />
    </IconButton>}
  />
}

export default SearchInput;