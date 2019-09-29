import { PathProps } from "../models";

const Path = (props: PathProps) => window.location.pathname === props.url ? props.render() : null

export default Path
