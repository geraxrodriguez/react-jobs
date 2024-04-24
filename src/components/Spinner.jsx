import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display: 'block',
    margin: '100px auto',
};

// Spinner will take loading in as a prop
const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            color='#4338ca'
            loading={loading}
            cssOverride={override}
            size={150}
        />
    );
};
export default Spinner;