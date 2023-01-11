


const TagBubble = ({tag, color}) => {
  return (
    <div style={{
      backgroundColor: color, 
      borderRadius: "10px", 
      paddingLeft: "0.5rem", 
      paddingRight: "0.5rem",
      width: "fit-content",
      marginRight: "0.5rem",
      fontSize: "14px",
      }}>
      {tag}
    </div>
  );
}

export default TagBubble;