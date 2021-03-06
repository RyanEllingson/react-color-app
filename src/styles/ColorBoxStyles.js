import chroma from "chroma-js";

const styles = {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover button": {
            opacity: 1,
            transition: "0.5s"
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() > 0.7 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() < 0.1 ? "white" : "black"
    },
    seeMore: {
        backgroundColor: "rgba(255,255,255,0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        color: props => chroma(props.background).luminance() > 0.7 ? "rgba(0,0,0,0.7)" : "white",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: props => chroma(props.background).luminance() > 0.7 ? "rgba(0,0,0,0.7)" : "white",
        textTransform: "uppercase",
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
        opacity: 0
    },
    boxContent: {
        position: "absolute",
        width: "calc(100%-20px)",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMessage: {
        position: "fixed",
        left: "0px",
        right: "0px",
        top: "0px",
        bottom: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: 0,
        color: "white",
        flexDirection: "column",
        "& h1": {
            fontWeight: 400,
            textShadow: "1px 2px black",
            background: "rgba(255,255,255,0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0px",
            padding: "1rem",
            textTransform: "uppercase"
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: 100
        }
    },
    showCopyMessage: {
        opacity: 1,
        transform: "scale(1)",
        zIndex: 25,
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s"
    }
};

export default styles;