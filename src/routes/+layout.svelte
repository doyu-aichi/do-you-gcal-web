<script lang="ts">
	import { base } from '$app/paths';
	import '../app.postcss';
	import 'carbon-components-svelte/css/g10.css';
	import Fa from 'svelte-fa';
	import {
		faEnvelope,
		faHouse,
		faHandSparkles,
		faGear,
		faHeadset,
		faUserGear,
		faShield
	} from '@fortawesome/free-solid-svg-icons';
	import {
		Header,
		HeaderNav,
		HeaderNavMenu,
		HeaderNavItem,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SideNavDivider,
		SkipToContent,
		Content,
		Grid,
		Row,
		Column
	} from 'carbon-components-svelte';
	import Footer from '$components/Footer.svelte';
	import SettingsAdjust from 'carbon-icons-svelte/lib/SettingsAdjust.svelte';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;
	$: isSideNavOpen = false;
	let isOpen1 = false;
	let isOpen2 = false;
</script>

<svelte:head />
<Header
	href="/"
	company="カイズ電気"
	platformName="Do You Gcal サポートサイト"
	bind:isSideNavOpen
	class="items-center align-middle logo-header"
>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		<HeaderNavItem href="/support" text="サポート" />
		<HeaderNavItem href="/privacy" text="プライバシー" />
	</HeaderNav>
</Header>
<SideNav bind:isOpen={isSideNavOpen} rail aria-label="メニュー">
	<SideNavItems>
		<SideNavLink href="{base}/support" text="サポート"
			><svelte:fragment slot="icon">
				<Fa icon={faHeadset} />
			</svelte:fragment>
		</SideNavLink>
		<SideNavLink href="{base}/privacy" text="プライバシー"
			><svelte:fragment slot="icon">
				<Fa icon={faShield} />
			</svelte:fragment>
		</SideNavLink>
	</SideNavItems>
</SideNav>
<Content>
	<Grid>
		<Row>
			<Column>
				<slot />
			</Column>
		</Row>
	</Grid>
</Content>
<Footer />

<style>
	:global(.bx--header__action > svg) {
		display: inline !important;
	}
	:global(.logo-header) {
		white-space: nowrap;
		margin-bottom: 0.2rem;
	}
	:global(.logo-header > span) {
		white-space: nowrap;
		margin-bottom: 0.2rem;
	}
	:global(a) {
		text-decoration: none !important;
	}
	:global(.bx--header__name--prefix) {
		color: white;
		font-family: kaizulogofont !important;
		font-size: 28px;
		line-height: 1.5rem;
	}
	:global(.bx--header__name--prefix:before) {
		color: white;
		display: inline-block;
		font-family: 'denkifont';
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		line-height: 2rem;
		text-decoration: inherit;
		text-rendering: optimizeLegibility;
		text-transform: none;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		font-smooth: antialiased;
		padding-right: 0.2em;
		content: '\f10d';
	}
	:global(
			#main-content,
			footer,
			.bx--side-nav__overlay,
			.bx--side-nav.bx--side-nav--rail:not(.bx--side-nav--fixed):hover,
			.bx--side-nav--expanded
		) {
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}
	:global(.bx--side-nav--collapsed) {
		animation: 0.2s hidemenu;
		transform: translateX(-16rem);
	}
	:global(.bx--side-nav--expanded) {
		animation: 0.2s showmenu;
	}

	:global(.bx--side-nav.bx--side-nav--collapsed ~ .bx--content) {
		margin-left: 0 !important;
	}

	@media screen and (max-width: 480px) {
		:global(.bx--content) {
			padding-left: 0;
			padding-right: 0;
		}
	}
	@keyframes hidemenu {
		0% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(-9rem);
		}
		100% {
			transform: translateX(-13rem);
		}
	}
	@keyframes showmenu {
		0% {
			transform: translateX(-13rem);
		}
		50% {
			transform: translateX(-3rem);
		}
		100% {
			transform: translateX(0rem);
		}
	}
</style>
