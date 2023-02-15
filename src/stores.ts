
import { page } from '$app/stores';
import { writable, type Writable, derived, readable } from 'svelte/store';
import { browser } from '$app/environment'
import { base } from '$app/paths';
export const sideOpen = writable(true)
export const pages = writable(0);
export const files = writable([]);
export const tasks = writable([]);
export const modal = writable(null);
export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);
export const reportType = [{ value: 0, name: '未選択' }, { value: 1, name: '工事' }, { value: 6, name: '調査' }, { value: 7, name: '見積請求' },
{ value: 2, name: '開発' }, { value: 3, name: '社内業務' }, { value: 4, name: '事務' }, { value: 5, name: '待機' }, { value: 8, name: '営業' }];
export const duration = [{ value: 'gte', name: '以降' }, { value: 'lte', name: '以前' }];
export const urlTypes = [{ value: 1, name: '見積・請求' }, { value: 2, name: '資料' }, { value: 3, name: '写真' }, { value: 4, name: 'リポジトリ' }, { value: 5, name: '地図' }, { value: 0, name: 'その他' }];
export const prefectures = ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
	'茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県', '石川県',
	'福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
	'徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県']

