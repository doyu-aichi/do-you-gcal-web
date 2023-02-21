<script lang="ts">
	import { Grid, Row, Column, Tile, ImageLoader } from 'carbon-components-svelte';
</script>

<svelte:head>
	<title>Do You Gcalサポートサイト</title>
	<meta name="description" content="Do You Gcal" />
</svelte:head>
<div class="p-4 m-4 ">
	<div class="mb-4 grid grid-flow-row-dense grid-cols-1">
		<h1 class="block">Do You Gcalサポートサイト</h1>
		<p class="p-4">
			愛知県中小企業同友会のポータルサイト、あいどるのカレンダー機能を補完しGoogleカレンダー連携を行うChrome拡張の公式サイトです<br
			/>
			なお、当ホームページならびにChrome拡張機能は愛知県中小企業同友会とは一切、関係はありません。
		</p>
		<p class="p-4">
			インストールは<a
				href="https://chrome.google.com/webstore/detail/nhgpinmgbpglndjkllhbcjcljbenjbgm?authuser=0&hl=ja"
				>こちら</a
			>から
		</p>
		<div />
		<Grid fullWidth>
			<Row
				><Column aspectRatio="2x1">
					<Tile light>
						<ImageLoader
							class="rounded-lg shadow shadow-md"
							fadeIn
							src="/screen_01.jpg"
							alt="スクリーン"
						/></Tile
					></Column
				><Column aspectRatio="2x1" />
			</Row><Row
				><Column
					><h2>利用方法</h2>
					<p>
						インストールすると<strong>あいどる</strong
						>ポータル上のカレンダーページを開いた際、右上に<strong>あ</strong
						>のアイコンタブが出現します。<br />
						リストからGoogleカレンダーに登録したいイベントの赤いボタンをクリックするとGoogleカレンダーにイベントが登録されます。<br
						/>
						なお、ChromeでGoogleアカウントにログインしている必要があります。
					</p></Column
				></Row
			>
		</Grid>
	</div>
</div>
