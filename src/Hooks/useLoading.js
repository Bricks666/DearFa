import React from "react";

import { useSelector } from "react-redux";
import { Loading } from "../Components/Shared/withLoading/Loading/Loading";
import { loadingsSelectors } from "../Selectors";

export const useLoading = (loadingName) => {
	const loadingStatus = useSelector((state) =>
		loadingsSelectors.getLoadingByName(state, loadingName)
	);
	const LoadingWrapper = ({ children, className }) => {
		return loadingStatus ? <Loading className={className} /> : children;
	};

	return { LoadingWrapper };
};
