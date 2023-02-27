// 4/26/2022 Update: This is not quite an example of parallax by some's standards. This was just a simple and incomplete attempt to learn parallax that I thought no one would notice. I did not anticipate this experimental pen to get so many views and I credit the awesomeness of Andre Benz's photography for that completely. 
// ----------------------------------
// A part of my effort to learn parallax.
// Photo Cred: Andre Benz @ https://unsplash.com/@trapnation

class App extends React.Component {
  handleMouseMove = (e) => {
    const el = document.getElementById("wrapper");
    const d = el.getBoundingClientRect();
    let x = e.clientX - (d.left + Math.floor(d.width / 2));
    let y = e.clientY - (d.top + Math.floor(d.height / 2));
    // Invert values
    x = x - x * 2;
    y = y - y * 2;
    document.documentElement.style.setProperty("--scale", 1.6);
    document.documentElement.style.setProperty("--x", x / 2 + "px");

    document.documentElement.style.setProperty("--y", y / 2 + "px");
  };

  handleMouseLeave = () => {
    document.documentElement.style.setProperty("--scale", 1);
    document.documentElement.style.setProperty("--x", 0);
    document.documentElement.style.setProperty("--y", 0);
  };
  render() {
    return (
      <div
        id="wrapper"
        onMouseMove={this.handleMouseMove}
        onClick={this.handleMouseLeave}
      >
        <img id="image" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
