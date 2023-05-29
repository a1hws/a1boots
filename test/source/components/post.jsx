export default function Pose(props) {
	return (
		<div className="post-card">
			<h2 className="post-title">{props.title}</h2>
			<p className="post-body">{props.body}</p>
			<button
				clssNAme="btn-detele"
				onClick={() => props.deletePost(props.id)}
			>Delete</button>
		</div>
	)
}
