import { createGlobalStyle } from 'styled-components'
import { background, color, fontFamily, fontWeight } from './ui/variables'

const FrontofficeStyle = createGlobalStyle`
	*,
	*:after,
	*:before {
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: ${fontFamily.default};
		font-weight: ${fontWeight.regular};
	}

	html {
		font-size: 16px;
		scroll-behavior: smooth;
	}

	body {
		margin: 0;
		background-color: ${background.body};
	}

	strong {
		font-weight: ${fontWeight.bold};
	}

	.adsbygoogle {
		@media print {
			display: none !important;
		}
	}

	::-webkit-scrollbar {
		width: .25rem;

		&-track {
			background: ${background.element};
		}
		
		&-thumb {
			border-radius: .5rem;
			background: ${color.highlight};

			&:hover {
				background: ${color.primary};
			}
		}
	}
`
export default FrontofficeStyle
