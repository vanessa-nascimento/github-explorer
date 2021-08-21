export function RepositoryItem(props) {
    return (
        <li>
            <span>{props.repository?.name}</span>
            <p>{props.repository?.description}</p>

            <a href={props.repository?.html_url} target="_blank">
                Acessar repositório
            </a>
        </li>
    );
}