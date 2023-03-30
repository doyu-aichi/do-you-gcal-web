<script lang="ts">
	import { Grid, Row, Column, Tile, ImageLoader } from 'carbon-components-svelte';
</script>

<svelte:head>
	<title>Do You Gcalサポートサイト</title>
	<meta name="description" content="Do You Gcal" />
</svelte:head>
<div class="lg:p-4 lg:m-4 sm:m-0 sm:p-0">
	<div class="md:mb-4 sm:mb-0 grid grid-flow-row-dense grid-cols-1">
		<h1 class="block lg:text-xl md:text-lg sm:text-xs">Do You Gcalサポートサイト</h1>
		<p class="p-4">
			愛知県中小企業同友会の会員忍耐力養成ポータルサイト、<strong>あいどる</strong
			>のカレンダー機能を補完しワンクリックでGoogleカレンダーにスケジュール登録を行うChrome拡張、<strong
				>Do You Gcal</strong
			>の公式サイトです（拡張機能を公開するためにサポートサイト開設が要件なので作成しました）<br />
			なお、当ホームページならびにChrome拡張機能は愛知県中小企業同友会とは一切、関係はありません。
		</p>
		<p class="p-4">
			公開の場で批判をすべきではありませんが、正直なところ<strong>あいどる</strong
			>にはW3C標準に満足に準拠できていない数多のコーディングはじめ脆弱性懸念すらあるのですが、長年に渡り問題は放置されています。<br
			/>
			これからも改善は期待できそうもなく、利用するたびに非常に残念な気持ちにならざるをえません。<br
			/>
			ベンダーの問題もさることながら受け入れ監査を行うべき事務局にも問題があるのではないでしょうか。
		</p>
		<p class="p-4">
			個人的に「中小企業はこうしてDXに失敗する」というサンプルケースを体現してると思っています。
		</p>
		<p class="p-4">
			インストールは<a
				href="https://chrome.google.com/webstore/detail/nhgpinmgbpglndjkllhbcjcljbenjbgm?authuser=0&hl=ja"
				aria-label="Chrome Web Store">こちら</a
			>から。バージョン0.5.0以上をご利用ください。<br />
			<i class="italic text-red-600"
				>この拡張機能は、セーフ ブラウジング保護強化機能で信頼されていません</i
			>と警告が出るかもしれませんが、新規登録したデベロッパーは信頼されたデベロッパーとみなされるのに数ヶ月要するためで、特に問題があるわけではありません。
			<a
				class="block m-4"
				aria-label="Chrome Web Store"
				href="https://chrome.google.com/webstore/detail/nhgpinmgbpglndjkllhbcjcljbenjbgm?authuser=0&hl=ja"
				><img src="/store_budge_s.png" width="208" height="58" alt="Chrome Web Store" /></a
			>
		</p>
		<div />
		<Grid fullWidth>
			<Row
				><Column>
					<Tile light>
						<ImageLoader
							class="rounded-lg shadow shadow-md"
							fadeIn
							width="1280"
							height="800"
							src="/screen_01.webp"
							style="max-width: 60vh;margin: 0 auto;"
							alt="スクリーン"
						/></Tile
					></Column
				>
			</Row><Row
				><Column
					><h2>利用方法</h2>
					<p class="leading-8">
						インストールすると<strong>あいどる</strong>ポータル上の<strong
							class=" bg-red-600  text-white px-2 py-0.5 mx-1">カレンダーページを開いた際</strong
						>、ページ右上に<strong
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
						リストからGoogleカレンダーに登録したいイベントの青い日付ボタンををクリックするとGoogleカレンダーにイベントが登録されます（Google
						カレンダーアイコンがあるイベントはすでにGoogleカレンダーに登録済みです）。<br />
						各イベントの右方にある「不明」のバッジをクリックすると参加登録済み否かが画面に反映されます。<br
						/>
						カレンダーイベントの編集そのものはできません。Googleカレンダー上で編集を行ってください。<br
						/>
						なお、ChromeでGoogleアカウントにログインしている必要があります。
					</p>
				</Column></Row
			>
			<!--<Row class="py-4"
				><Column
					><img
						src="/screen_calendar_01.jpg"
						class="object-none object-center shadow-md rounded-full mx-auto h-20 w-60 scale-110"
					/></Column
				><Column
					><img
						src="/screen_calendar_01.jpg"
						class="object-none object-left-top shadow-md rounded-full mx-auto h-20 w-80 scale-110"
					/></Column
				><Column
					><img
						src="/screen_calendar_01.jpg"
						class="object-none object-right shadow-md rounded-full mx-auto h-40 w-80"
					/></Column
				><Column
					><img
						src="/screen_calendar_01.jpg"
						class="object-none object-right-top shadow-md rounded-full mx-auto h-40 w-80"
					/></Column
				></Row
			>-->
			<Row
				><Column
					><h2 class="pt-4">利用規約</h2>
					<p class="leading-8">
						特にありません。無料でご利用いただけます。<br />
						<strong>あいどる</strong
						>に負荷がかからない配慮をしていますが、同友会事務局から正当な理由による公開差止め要請があった際、公開中止することがあります。<br
						/>
						モチベーション維持のための寄付やプレゼントは歓迎します。<a
							href="https://www.amazon.jp/hz/wishlist/ls/3VZ6OX6U7SG2R?ref_=wl_share"
							>Amazon 欲しい物リスト</a
						>
						<br />
						また個人的に特別な追加機能をご希望の場合は有償にて対応も可能です。ご相談ください。
					</p></Column
				></Row
			>
		</Grid>
	</div>
</div>

<style>
	h1 {
		font-size: xx-large;
	}
	h2 {
		font-size: x-large;
	}
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
	small {
		font-size: small;
	}
</style>
