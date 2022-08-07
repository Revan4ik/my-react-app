import "./style.css"
let count = 0
const activeMenu = () => {
  const menu = document.querySelector('.left-menu')
  if (count === 0) {
    menu.classList.add('active')
    count = 1
}
    else{
      menu.classList.remove('active')
      count = 0
    };
}

function LeftMenu (props){
    return (
        <div className ="left-menu">
            <ul><li><a href="../index.html">{props.item1}</a></li>
            <li><a href="../index.html">{props.item2}</a></li>
            <li><a href="../index.html">{props.item3}</a></li>
            <li><a href="../index.html">{props.item4}</a></li>
            <li><a href="../index.html">{props.item5}</a></li>
            </ul>
        </div>
    )
}
export {LeftMenu, activeMenu}