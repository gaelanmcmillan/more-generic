
const tagMap = new Map();
// tagMap.set("Dynamic Programming", "#AAAABB");
// tagMap.set("Greedy", "#DD8888");
// tagMap.set("Longest Increasing Subsequence", "#70AB70");
// tagMap.set("Simulation", "#CDBD99");
// tagMap.set("Priority Queue", "#AA88BA");
// tagMap.set("cpp", "#99ABDD");
// tagMap.set("py", "#DCAB88");

const randomBetween = (low, high) => {
  return Math.round(low + Math.random() * (high - low));
}

const generateRandomColour = () => {
  const low = 150;
  const high = 220;
  const avg = Math.round((low + high) / 2);
  let r = randomBetween(low, high);
  let g = randomBetween(low, high);
  let b = Math.min(avg*3 - r - g, 220);

  const str = `#${[r, g, b].map(col => col.toString(16)).join('')}`;

  return str;
}

const registerNewColour = (tag) => {
  if (tagMap.has(tag)) return;
  const col = generateRandomColour(); 
  tagMap.set(tag, col);
}

const TagBubble = ({tag}) => {
  registerNewColour(tag);
  return (
    <div style={{
      backgroundColor: tagMap.get(tag), 
      whiteSpace: "nowrap",
      borderRadius: "10px", 
      paddingLeft: "0.5rem", 
      paddingRight: "0.5rem",
      width: "fit-content",
      marginRight: "0.5rem",
      fontSize: "15px",
      fontWeight: "bold",
      display: "inline-block"
      }}>
      {tag}
    </div>
  );
}

export default TagBubble;

export { registerNewColour };