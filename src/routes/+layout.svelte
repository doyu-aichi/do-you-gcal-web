<script lang="ts">
	import '../app.postcss';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<header class="site-header">
	<a class="brand" href="/" aria-label="Do You Gcal ホーム">
		<img src="/icon_32.png" alt="" width="32" height="32" />
		<span>Do You Gcal</span>
	</a>
	<nav aria-label="主要メニュー">
		<a href="/">概要</a>
		<a href="/support">サポート</a>
		<a href="/faq">FAQ</a>
		<a href="/privacy">プライバシー</a>
	</nav>
</header>

<main>
	{@render children()}
</main>

<Footer />

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 18px;
		min-height: 58px;
		padding: 0 max(16px, calc((100vw - 1120px) / 2));
		background: rgba(44, 44, 44, 0.94);
		border-bottom: 3px solid #8bba14;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.22);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		color: #ffffff;
		font-size: 1.05rem;
		font-weight: 900;
		text-decoration: none;
		white-space: nowrap;
	}

	.brand img {
		width: 32px;
		height: 32px;
		background: #ffffff;
		border: 1px solid #ffffff;
		border-radius: 50%;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	nav a {
		padding: 8px 10px;
		color: #faebd7;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 800;
		text-decoration: none;
	}

	nav a:hover {
		color: #1f1f1f;
		background: #faebd7;
	}

	main {
		min-height: calc(100vh - 138px);
	}

	@media (max-width: 560px) {
		.site-header {
			align-items: flex-start;
			flex-direction: column;
			padding: 10px 12px;
		}

		nav {
			width: 100%;
		}

		nav a {
			flex: 1;
			text-align: center;
		}
	}
</style>
