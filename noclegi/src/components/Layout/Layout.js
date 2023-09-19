function Layout(props){
    return (
        <div>
            <div>{props.header}</div>
            <div className="container-sm">{props.menu}</div>
            <div className="container-sm">{props.content}</div>
            <div>{props.footer}</div>
        </div>
    )
}
export default Layout;