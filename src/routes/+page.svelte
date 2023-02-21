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
					<p class="leading-8">
						インストールすると<strong>あいどる</strong
						>ポータル上のカレンダーページを開いた際、ページ右上に<strong
							><svg
								width="24px"
								height="24px"
								viewBox="0 0 128 128"
								class="inline-block  align-text-bottom"
								><circle
									cx="64"
									cy="64"
									r="52"
									style="fill:#009b2c;stroke:#b1dcff;stroke-opacity:0.7;stroke-width:13px;"
								/><path
									d="M46.712,31.105l-21.6,0l-0,7.68l21.504,0l-0,9.12c-0,1.44 -0,2.4 0.096,3.648c-14.88,5.472 -23.808,16.224 -23.808,29.376c-0,7.008 3.264,17.568 15.84,17.568c11.712,0 30.048,-10.368 38.112,-42.624c15.456,3.072 19.104,12 19.104,19.584c-0,18.912 -21.792,20.544 -35.424,20.544l2.208,7.488c6.72,-0.192 11.712,-0.576 17.184,-1.728c4.224,-0.96 24.096,-5.28 24.096,-25.92c-0,-6.144 -2.304,-13.056 -7.104,-18.144c-7.968,-8.256 -20.64,-9.504 -28.992,-9.504c-6.432,0 -11.328,0.864 -12.96,1.248l-0,-4.704l0.096,-5.952l46.56,0l-0,-7.68l-46.464,0l0.192,-9.792l-8.64,-0.096l-0,9.888Zm11.136,48.48c-1.248,-4.896 -2.496,-16.224 -2.688,-23.136c6.24,-1.536 10.656,-1.44 13.824,-1.344c-4.128,15.36 -9.696,22.752 -11.136,24.48Zm-6.72,6.528c-2.304,1.632 -6.432,4.512 -11.808,4.512c-5.088,0 -8.544,-3.552 -8.544,-9.888c-0,-10.56 8.064,-17.568 16.32,-21.504c0.96,11.712 1.632,19.2 4.032,26.88Z"
									style="fill:#0d0081;fill-rule:nonzero;"
								/></svg
							></strong
						>のアイコンタブが出現します。<br />
						リストからGoogleカレンダーに登録したいイベントの赤いボタン
						<button class="add align-text-bottom">
							<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"
								><path d="M0 0h24v24H0V0z" fill="none" /><path
									d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
								/></svg
							>
						</button>をクリックするとGoogleカレンダーにイベントが登録されます。<br />
						<button class="detail align-text-bottom" disabled
							><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"
								><path
									d="M10.7 17.25h2.625v-6.225H10.7ZM12 9.6q.625 0 1.038-.412.412-.413.412-1.038t-.412-1.038Q12.625 6.7 12 6.7q-.6 0-1.025.412-.425.413-.425 1.038 0 .6.413 1.025.412.425 1.037.425Zm0 13q-2.225 0-4.15-.837-1.925-.838-3.35-2.263-1.425-1.425-2.262-3.35Q1.4 14.225 1.4 12q0-2.225.838-4.15Q3.075 5.925 4.5 4.5t3.35-2.263Q9.775 1.4 12 1.4q2.225 0 4.15.837 1.925.838 3.35 2.263 1.425 1.425 2.263 3.35.837 1.925.837 4.15 0 2.225-.837 4.15-.838 1.925-2.263 3.35-1.425 1.425-3.35 2.263-1.925.837-4.15.837Z"
								/></svg
							>
						</button>をクリックすると参加登録済みか画面に反映します。<br />
						カレンダーイベントの編集そのものはできません。Googleカレンダー上で編集を行ってください。<br
						/>
						なお、ChromeでGoogleアカウントにログインしている必要があります。
					</p></Column
				></Row
			>
		</Grid>
	</div>
</div>

<style>
	button.detail {
		position: relative;
		fill: #1f90a7;
		display: inline-block;
		background-color: white;
		border-radius: 1em;
		margin: 0 0.3em 0 0;
		padding: 0;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
	}
	button.add {
		position: relative;
		fill: #c24646;
		display: inline-block;
		background-color: white;
		border-radius: 1em;
		margin: 0 0.3em 0 0;
		padding: 0;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
	}
</style>
