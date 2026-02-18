# My Barcelona - EAS 登録とビルド

バルセロナ向けの EAS プロジェクト登録は完了しています。初回ビルドだけ対話実行が必要です。

---

## 済んでいること

- **EAS プロジェクト**: `@nozomusp/my-barcelona` 作成・リンク済み  
  - Project ID: `2d4ddfbf-4e7e-48e0-afcb-80d87ad858d5`（`app.json` に記載）
- **eas.json**: `barcelona` ビルド・submit プロファイル追加済み
- **app.config.js**: My Barcelona 用（name, slug, bundleId, scheme, extra.city）
- **iOS**: `ITSAppUsesNonExemptEncryption: false` を設定済み

---

## 初回だけ：証明書・Keystore の設定（対話で実行）

iOS の Distribution 証明書と Android の Keystore は、**初回のみ**対話モードで設定する必要があります。ターミナルで次を実行してください。

```bash
# 両方まとめて（初回はプロンプトに従って証明書・Keystore を設定）
eas build --profile barcelona --platform all
```

- **iOS**: Apple Developer にログインし、Distribution Certificate 等を設定
- **Android**: Keystore を新規作成するかどうか聞かれたら `Y` で作成

2 回目以降は次で非対話ビルドできます。

```bash
eas build --profile barcelona --platform all --non-interactive --no-wait
```

---

## ビルド・提出コマンド一覧

| 操作 | コマンド |
|------|----------|
| ローカル確認 | `npm run start:barcelona` |
| ビルド（両方） | `npm run build:barcelona` または `eas build --profile barcelona -p all` |
| ビルド（iOS のみ） | `eas build --profile barcelona -p ios` |
| ビルド（Android のみ） | `eas build --profile barcelona -p android` |
| ストア提出 | `eas submit --profile barcelona --latest` |

---

## プロジェクト URL

- **Expo ダッシュボード**: https://expo.dev/accounts/nozomusp/projects/my-barcelona
