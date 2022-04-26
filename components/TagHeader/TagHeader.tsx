import styled from 'styled-components';

const TagHeaderLine = styled.h1`
    div {
        font-size: 1.1rem;
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 300;
    }

    font-family: ${({ theme }) => theme.fonts.primary};
    text-transform: uppercase;
    font-size: 3rem;
`;

interface TagHeaderProps {
    name: string
}

const TagHeader = ({ name }: TagHeaderProps): JSX.Element => (
    <TagHeaderLine>
        <div>Posts Tagged</div>
        {name}
    </TagHeaderLine>
);

export default TagHeader;