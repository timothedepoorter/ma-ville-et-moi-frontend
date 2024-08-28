import PropTypes from 'prop-types';

export const FormInput = ({ type, name, onChange, value, isRequired }) => {
    return (
        <div className='flex flex-col max-w-lg w-10/12'>
            <label className='text-black ml-2 font-medium text-xl' htmlFor={name}>{name}</label>
            <input className='bg-white rounded-sm text-black py-1 pl-1 outline-none' type={type} name={name} value={value} onChange={onChange} required={isRequired} />
        </div>
    )
}

FormInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired
};