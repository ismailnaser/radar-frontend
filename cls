[1mdiff --git a/src/pages/Home.jsx b/src/pages/Home.jsx[m
[1mindex 79c7d3c..dad8df4 100644[m
[1m--- a/src/pages/Home.jsx[m
[1m+++ b/src/pages/Home.jsx[m
[36m@@ -1108,868 +1108,6 @@[m [mconst Home = () => {[m
           ) : null}[m
         </div>[m
 [m
[31m-        <div className="home-mode-strip" role="presentation">[m
[31m-          <div className="home-mode-switch" role="tablist" aria-label="تصفح المتاجر أو الخدمات المجتمعية">[m
[31m-            <button[m
[31m-              type="button"[m
[31m-              role="tab"[m
[31m-              aria-selected={filterMode === 'stores'}[m
[31m-              title="المتاجر والعروض التجارية"[m
[31m-              className={`home-mode-btn${filterMode === 'stores' ? ' home-mode-btn--on' : ''}`}[m
[31m-              onClick={goToFilterStores}[m
[31m-            >[m
[31m-              <Store size={15} strokeWidth={2.25} aria-hidden />[m
[31m-              <span>متاجر</span>[m
[31m-            </button>[m
[31m-            <button[m
[31m-              type="button"[m
[31m-              role="tab"[m
[31m-              aria-selected={filterMode === 'community'}[m
[31m-              title="خدمات مجتمعية على الخريطة"[m
[31m-              className={`home-mode-btn${filterMode === 'community' ? ' home-mode-btn--on' : ''}`}[m
[31m-              onClick={goToFilterCommunity}[m
[31m-            >[m
[31m-              <Sparkles size={15} strokeWidth={2.25} aria-hidden />[m
[31m-              <span>مجتمعي</span>[m
[31m-            </button>[m
[31m-          </div>[m
[31m-        </div>[m
[31m-[m
[31m-        {!isMerchantOnHome ? ([m
[31m-          <section className="home-browse-block" aria-label="تصفح حسب الفئات">[m
[31m-            <div className="home-browse-head">[m
[31m-              <h2 className="home-browse-title">[m
[31m-                {isSmallScreen ? 'تصفية سريعة' : filterMode === 'stores' ? 'تصفح حسب الفئات' : 'أقسام الخدمات المجتمعية'}[m
[31m-              </h2>[m
[31m-              <FiltersDropdown[m
[31m-                className="filters-dd--home-quick"[m
[31m-                buttonClassName="home-browse-filterbtn"[m
[31m-                buttonLabel="فلترة"[m
[31m-                title={filterMode === 'stores' ? 'فلترة المتاجر حسب الأقسام' : 'فلترة الخدمات حسب الأقسام'}[m
[31m-                allLabel={filterMode === 'stores' ? 'كل الأقسام' : 'كل الخدمات'}[m
[31m-                requireConfirm[m
[31m-                options={(filterMode === 'stores' ? categories : communityCategories).map((c) => ({[m
[31m-                  id: c.id,[m
[31m-                  label: c.name,[m
[31m-                }))}[m
[31m-                selectedIds={[m
[31m-                  filterMode === 'stores'[m
[31m-                    ? selectedCategoryIds[m
[31m-                    : selectedCommunityCategoryId != null[m
[31m-                      ? [selectedCommunityCategoryId][m
[31m-                      : [][m
[31m-                }[m
[31m-                onChangeSelectedIds={(ids) => {[m
[31m-                  const next = new URLSearchParams(searchParams);[m
[31m-                  if (filterMode === 'stores') {[m
[31m-                    next.delete('filter');[m
[31m-                    next.delete('cc');[m
[31m-                    const picks = Array.isArray(ids)[m
[31m-                      ? ids.filter((x) => x != null && String(x).trim() !== '')[m
[31m-                      : [];[m
[31m-                    if (picks.length === 0) next.delete('category');[m
[31m-                    else next.set('category', picks.join(','));[m
[31m-                  } else {[m
[31m-                    next.set('filter', 'community');[m
[31m-                    next.delete('category');[m
[31m-                    const pick = Array.isArray(ids) && ids.length ? Number(ids[0]) : null;[m
[31m-                    if (pick == null || !Number.isFinite(pick)) next.delete('cc');[m
[31m-                    else next.set('cc', String(pick));[m
[31m-                  }[m
[31m-                  setSearchParams(next, { replace: true });[m
[31m-                }}[m
[31m-              />[m
[31m-            </div>[m
[31m-            <div className="home-browse-scroll" ref={browseScrollRef}>[m
[31m-              {filterMode === 'stores' ? ([m
[31m-                <>[m
[31m-                  <button[m
[31m-                    type="button"[m
[31m-                    className={`home-browse-item home-browse-item--all${selectedCategoryId == null ? ' home-browse-item--active' : ''}`}[m
[31m-                    onClick={() => {[m
[31m-                      const next = new URLSearchParams(searchParams);[m
[31m-                      next.delete('category');[m
[31m-                      next.delete('filter');[m
[31m-                      next.delete('cc');[m
[31m-                      setSearchParams(next, { replace: true });[m
[31m-                    }}[m
[31m-                  >[m
[31m-                    <span[m
[31m-                      className="home-browse-tile"[m
[31m-                      style={{[m
[31m-                        color: 'var(--secondary)',[m
[31m-                        ...categoryTileSurface('var(--secondary)'),[m
[31m-                      }}[m
[31m-                    >[m
[31m-                      <LayoutGrid size={22} strokeWidth={1.85} aria-hidden />[m
[31m-                    </span>[m
[31m-                    <span className="home-browse-label">الكل</span>[m
[31m-                  </button>[m
[31m-                  {categoriesLoading[m
[31m-                    ? null[m
[31m-                    : categories.map((c) => {[m
[31m-                        const { Icon, tone } = browseCategoryVisual(c.name);[m
[31m-                        const surf = categoryTileSurface(tone);[m
[31m-                        return ([m
[31m-                          <button[m
[31m-                            key={c.id}[m
[31m-                            type="button"[m
[31m-                            className={`home-browse-item${selectedCategoryId === c.id ? ' home-browse-item--active' : ''}`}[m
[31m-                            onClick={() => {[m
[31m-                              const p = new URLSearchParams(searchParams);[m
[31m-                              p.delete('filter');[m
[31m-                              p.delete('cc');[m
[31m-                              p.set('category', String(c.id));[m
[31m-                              setSearchParams(p, { replace: true });[m
[31m-                            }}[m
[31m-                          >[m
[31m-                            <span[m
[31m-                              className="home-browse-tile"[m
[31m-                              style={{ color: tone, background: surf.background, borderColor: surf.borderColor }}[m
[31m-                            >[m
[31m-                              <Icon size={22} strokeWidth={1.85} aria-hidden />[m
[31m-                            </span>[m
[31m-                            <span className="home-browse-label">{c.name}</span>[m
[31m-                          </button>[m
[31m-                        );[m
[31m-                      })}[m
[31m-                </>[m
[31m-              ) : ([m
[31m-                <>[m
[31m-                  <button[m
[31m-                    type="button"[m
[31m-                    className={`home-browse-item home-browse-item--all${selectedCommunityCategoryId == null ? ' home-browse-item--active' : ''}`}[m
[31m-                    onClick={() => {[m
[31m-                      const next = new URLSearchParams(searchParams);[m
[31m-                      next.set('filter', 'community');[m
[31m-                      next.delete('cc');[m
[31m-                      next.delete('category');[m
[31m-                      setSearchPa