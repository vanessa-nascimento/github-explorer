export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default Name'}</strong>
            <p>{props.repository?.description ?? 'Default Description'}</p>

            <a href={props.repository?.link ?? 'https://google.com'} target="_blank">
                Acessar repositório
            </a>
        </li>
    );
}