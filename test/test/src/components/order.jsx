export default function Order(props) {
	return (
		<div className="order-card">
			<h2 className="order-title">{props.title}</h2>
			<p className="order-body">{props.body}</p>
		</div>
	)
}
