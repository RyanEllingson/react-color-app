const styles = {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "5vh"
    },
    logo: {
        height: "100%",
        marginRight: "15px",
        padding: "0px 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black"
        }
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem"
    },
    slider: {
        width: "340px",
        margin: "0px 10px",
        display: "inline-block",
        "& .rc-slider-track": {
            backgroundColor: "transparent!important"
        },
        "& .rc-slider-rail": {
            height: "8px!important"
        },
        "& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus": {
            backgroundColor: "green!important",
            outline: "none!important",
            border: "2px solid green!important",
            width: "13px!important",
            height: "13px!important",
            marginLeft: "-2px!important",
            marginTop: "-3px!important"
        }
    }
};

export default styles;