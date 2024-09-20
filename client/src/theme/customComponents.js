import { styled } from "@mui/material";

export const LinkBorderBtn = styled('button')({
    border: "1px solid #DDDDDD",
    backgroundColor: "#FFFFFF",
    height: "fit-content",
    minWidth: 140,
    padding: "8px 16px",
    color: "#8B8B8B",
    borderRadius: 6,
    fontSize: 16,
    cursor: "pointer"
})


export const SaleBadge = styled('div')({
    position: "absolute",
    top: 16,
    right: 16,
    width: 68,
    height: 34,
    backgroundColor: "#0D50FF",
    borderRadius: 8,
    fontSize: 20,
    fontWeight: 600,
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 2
})