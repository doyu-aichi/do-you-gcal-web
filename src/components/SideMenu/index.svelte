<script lang="ts">
	import { page } from '$app/stores';
	import {
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink
	} from 'carbon-components-svelte';
	import Home from 'carbon-icons-svelte/lib/Home.svelte';
	import Report from 'carbon-icons-svelte/lib/Report.svelte';
	import { writable, type Writable } from 'svelte/store';
	import { storeCurrentUrl } from '../../stores';
	const storeValue: Writable<number> = writable(1);
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
	import { base } from '$app/paths';

	const storeCategory: Writable<string> = writable('guides'); // guides | docs | tailwind | svelte | utilities

	$: classesActive = (href: string) =>
		$storeCurrentUrl?.includes(href) ? 'bg-primary-active-token' : '';

	// Props
	export let embedded = false;
	export let isSideNavOpen: boolean;
</script>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavLink href="{base}/" text="メイン">
			<svelte:fragment slot="icon">
				<Fa icon={faHouse} />
			</svelte:fragment>
		</SideNavLink>
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

<style>
</style>
