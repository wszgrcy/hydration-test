1. npm i
2. npm start
3. goto `http://localhost:4200`
4.

```log
Error: NG0503: During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.

<app-root>
  …
  <!-- container -->
  <app-wrapper>…</app-wrapper>  <-- AT THIS LOCATION
  …
</app-root>

Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

 Find more at https://v21.angular.dev/errors/NG0503
    at unsupportedProjectionOfDomNodes (C:\code\my-project\hydration-test\.angular\cache\21.2.5\hydration-test\vite\deps_ssr\chunk-VPZWV425.js:19498:10)
    at serializeLView (C:\code\my-project\hydration-test\.angular\cache\21.2.5\hydration-test\vite\deps_ssr\chunk-VPZWV425.js:34147:17)
    at serializeLContainer (C:\code\my-project\hydration-test\.angular\cache\21.2.5\hydration-test\vite\deps_ssr\chunk-VPZWV425.js:34050:39)
    at serializeLView (C:\code\my-project\hydration-test\.angular\cache\21.2.5\hydration-test\vite\deps_ssr\chunk-VPZWV425.js:34161:40)
    at annotateHostElementForHydration (C:\code\my-project\hydration-test\.angular\cache\21.2.5\hydration-test\vite\deps_ssr\chunk-VPZWV425.js:34216:17)
    at annotateComponentLViewForHydration (C:\code\my-project\hydration-test\.angular\cache\21.2.5\hydration-test\vite\deps_ssr\chunk-VPZWV425.js:33911:12)
    at annotateForHydration (C:\code\my-project\hydration-test\.angular\cache\21.2.5\hydration-test\vite\deps_ssr\chunk-VPZWV425.js:33958:9)
    at prepareForHydration (C:\code\my-project\hydration-test\.angular\cache\21.2.5\hydration-test\vite\deps_ssr\chunk-ADU3DNVD.js:727:50)
    at renderInternal (C:\code\my-project\hydration-test\.angular\cache\21.2.5\hydration-test\vite\deps_ssr\chunk-ADU3DNVD.js:767:3)
    at Timeout.eval (C:\code\my-project\hydration-test\.angular\cache\21.2.5\hydration-test\vite\deps_ssr\chunk-ADU3DNVD.js:11095:11)
```


## work success on client
1. Replace angular.json with angular.client.json.
