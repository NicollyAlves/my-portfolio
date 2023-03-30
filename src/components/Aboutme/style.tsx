import { styled } from "@/styles/stitches.config";

export const AboutmeSection = styled("section", {
  background: "$grey1",
  padding: "$section 0",
  "@mobile": {
    padding: "$sectionMobile 0",
  },
});

export const AboutmeSectionContent = styled("li", {
  display: "flex",
  justifyContent: "space-between",
  "@mobile": {
    flexDirection: "row"
  },
});

export const AboutmeSectionText = styled("aside", {
  maxWidth: "26.25rem",
  display: "grid",
  gridGap: "$2",
  height: "max-content",
  position: "sticky",
  top: "8rem",
  "@mobile": {
    position: "static",
    marginBottom: "$5"
  },
});

export const AboutmeCards = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "50%",
  "@mobile": {
    width: "100%",
  },
});

export const AboutmeCard = styled("div", {
  width: "100%",
  display: "flex",
  paddingRight: "10rem",
  marginBottom: "6rem",
  ["& a"]:{
    "&:hover":{
        color: "$grey4",
        cursor: "pointer"
    }
  },
  "@mobile": {
    paddingRight: "0",
  },
});

export const AboutmeCardContent = styled("div", {
  display: "grid",
  gridGap: "$2",
});

export const TextDiv = styled("div", {
    display: "flex",
    flexDirection: "row",
    "@mobile": {
      overflow: "scroll"
    }
})

export const TextBox = styled("div", {
    borderRadius: "20px",
    border: "1px solid #3b2e45",
    backgroundColor: "#121214",
    color: "#868E96",
    marginTop: "30px",
    marginRight: "20px",
    fontSize: "12px",
    fontWeight: "bold",
    padding: "12px 45px",
    letterSpacing: "1px",
    lineHeight: "18px",
    width: "350px",
    transition: "transform 80ms ease-in",
    textAlign: "justify",
    
    
    "&:hover" : {
        boxShadow: "1px 0.5px 7px 1px  #623CEA",
    }
})

export const ImgPaint = styled("img", {
    width: "120px",
    marginTop: "40px",
    marginLeft: "70px",
    marginBottom: "40px",
})

export const ImgCom = styled("img", {
    marginLeft: "10px",
    width: "240px",
    marginTop: "-20px",
    marginBottom: "-20px"
})

export const ImgBook = styled("img", {
    marginLeft: "35px",
    width: "180px",
    marginTop: "20px"
})
