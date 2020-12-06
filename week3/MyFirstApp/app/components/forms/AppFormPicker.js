import React from 'react'
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({ items, name, placeholder, width, PickerItemComponent, numberOfColumns }) {
    const { setFieldValue, values, errors, touched } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                onSelectItem={values[name]}
                numberOfColumns={numberOfColumns}
                width={width}
                PickerItemComponent={PickerItemComponent}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}