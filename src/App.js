import React from 'react';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import { Main } from 'views';

const cache = createCache({
	key: 'css',
	prepend: true,
});

const App = () => {
	return (
		<StyledEngineProvider injectFirst>
			<CacheProvider value={cache}>
				<Main />
			</CacheProvider>
		</StyledEngineProvider>
	);
}

export default App;
