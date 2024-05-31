---
title: "Лекция 3. Три кита веб-безопасности"
meta: "lection-3"
metaTitle: "Три кита веб-безопасности"
name: "three-pillars-of-web-security"
description: "В данном курсе рассматриваются 3 основных принципа информационной безопасности"
courseID: 2
imgPath: "/information.jpg"
---

# Лекция 3. Три кита информаицонной безопасности

**HTTP** - протокол позволяющий получать различные ресурсы. Например: HTML документ. Данный протокол лежит в основе обмена данными в интернете. HTTP является протоколом клиент-серверного взаимодействия. Что означает инициирования запроса к серверу самим получателем, обычно веб-браузером. Клиент и сервер взаимодействуют обмениваясь одиночными сообщениями, а не потоком данных. Виды сообщения: отправленные клиентом называют запросами, а сообщения отправленные сервером называют ответами.

**TLS(Transport Layer Security)** - это криптографический протокол, обеспечивающий защищённую передачу данных между узлами в сети интернет. Он использует ассиметричное шифрование для аутентификации, симметричное шифрование для конфиденциальности и коды аутентичности, для сохранения целостности сообщений. Является предшественником **SSL(Security Sockets Layer)**
<hr>

## 3 важных принципа информационной безопасности

## Целостность
>Принцип целостности в информационной безопасности (ИБ)
означает обеспечение неприкосновенности данных и ресурсов системы, предотвращая их несанкционированное изменение или разрушение. Этот принцип направлен на обеспечение сохранности информации и поддержание ее оригинального состояния.

### Способы обеспечения целостности данных

1. **Контроль целостности в базах данных:**
   - Использование ограничений целостности в базах данных, таких как первичные ключи, внешние ключи и уникальные ограничения, чтобы гарантировать согласованность данных.
   - Транзакции, которые обеспечивают атомарность, согласованность, изолированность и долговечность (ACID).

2. **Хэширование данных:**
   - Применение хэш-функций для создания контрольных сумм или хэш-значений данных.
   - Проверка хэш-значений для обнаружения любых изменений данных.

3. **Резервное копирование и восстановление:**
   - Регулярные резервные копии данных с возможностью их восстановления в случае утраты целостности.

4. **Контроль доступа:**
   - Управление доступом к данным, чтобы предотвратить несанкционированные изменения.

>Целостность данных важна в информационной безопасности, потому что ошибки или изменения в данных могут иметь серьезные последствия. Примеры включают потерю денег в банковской сфере, ошибочное лечение в медицине, проблемы с идентификацией в государственных базах данных и опасности в аэрокосмической промышленности. В этих сферах целостность имеет приоритет, так как ошибки могут вызвать более серьезные последствия, чем временные проблемы с доступностью или утечки конфиденциальной информации.

## **Конфиденциальность**
> это ограничение требующие не разглашать информацию третьим лицам, без согласия её обладателя.

## **Доступность** 
> это обеспечение современного и надёжного доступа к информации в информационном сервисе. Типичными нарушениями доступности информации является сбой программных или аппаратных средств и распределённая атака, типа отказа от обслуживания (DDoS атаки).

**Инструменты для достижения доступности:**

1. Резервное копирование данных.
2. Регулярные обновления программного обеспечения. 
3. Мониторинг производительности.
4. Система аутентификации. 
5. Ограниченный доступ.