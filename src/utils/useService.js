import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const useService = (service) => [
    useAction(service.action),
    useAction(service.cleanAction)
];

export const useAction = (action) => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(action, dispatch), [action, dispatch]);
};
