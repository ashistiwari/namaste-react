/* 
<div>
<div id="parent">
    <div id="child">
        <div id="grandchild">
        <h1></h1>
        <h1></h1>
    </div>
    </div>
    </div>
*/



const heading = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("div", { id: "grandchild" }, 
            [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h1", {}, "I am h2 tag"  )]
            
        )
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);