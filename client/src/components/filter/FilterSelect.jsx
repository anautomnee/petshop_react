import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box } from "@mui/material";

export const FilterSelect = ({ options, defaultValue, onChange }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        if (onChange) {
            onChange(value);
        }
    };
    return <Box className="select__container">
        <Box
            className={`
                select ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <span>{selectedValue || "Select option"}</span>
            {isOpen ? <KeyboardArrowUpIcon sx={{ fontSize: 20 }} /> : <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />}
        </Box>
        {isOpen && (
            <ul className="custom-options">
                {options.map((option) => (
                    <li
                        key={option}
                        className={`custom-option ${option === selectedValue ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        )}
    </Box>
}