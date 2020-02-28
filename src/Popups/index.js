const pt2_misc_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Location: ${feature.properties.location}</p> 
    <p class="info">Registered Date: ${feature.properties.date_registered}</p>
    <p class="info">TLC Reference: ${feature.properties.tlc_ref}</p>
    </div>`
    layer.bindPopup(content)
}
const pt3_article4_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    ${feature.properties.description1}</p>
    <p class="info">Description: ${feature.properties.description2}</p>
    <p class="info">Registered Date: ${feature.properties.date_registered}</p>
    </div>`
    layer.bindPopup(content)
}
const pt3_conservation_areas_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Type: ${feature.properties.type}</p> 
    <p class="info">Registered Date: ${feature.properties.date_registered}
     </div>`
    layer.bindPopup(content)
}
const pt3_misc_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Location: ${feature.properties.location}</p> 
    <p class="info">Registered Date: ${feature.properties.date_registered}</p>
    <p class="info">TLC Reference: ${feature.properties.tlc_ref}
    </div>`
    layer.bindPopup(content)
}
const pt3_planning_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Location: ${feature.properties.location}</p>
    <p class="info">Reference: ${feature.properties.plan_ref}</p>
    <p class="info">Registered Date: ${feature.properties.date_registered}
    </div>`
    layer.bindPopup(content)
}
const pt3_planning_notices_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Location: ${feature.properties.location}</p>
    <p class="info">Registered Date: ${feature.properties.date_registered}
    </div>`
    layer.bindPopup(content)
}
const pt3_tpo_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    ${feature.properties.description1}</p>
    <p class="info">Description: ${feature.properties.description2}</p>
    <p class="info">Registered Date: ${feature.properties.date_registered}</p>
    <p class="info">TLC Reference: ${feature.properties.tlc_ref}
    </div>`
    layer.bindPopup(content)
}
const pt4_ancient_monuments_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Registered Date: ${feature.properties.date_registered}
    </div>`
    layer.bindPopup(content)
}
const pt4_common_land_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Registered Date: ${feature.properties.date_registered}
    </div>`
    layer.bindPopup(content)
}
const pt4_cpo_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Registered Date: ${feature.properties.date_registered}
    </div>`
    layer.bindPopup(content)
}
const pt4_misc_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Location: ${feature.properties.location}</p> 
    <p class="info">Registered Date: ${feature.properties.date_registered}</p>
    <p class="info">TLC Reference: ${feature.properties.tlc_ref}
    </div>`
    layer.bindPopup(content)
}
const pt4_pipelines_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Registered Date: ${feature.properties.date_registered}
    </div>`
    layer.bindPopup(content)
}
const pt4_s38_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p> 
    <p class="info">Registered Date: ${feature.properties.date_registered}</p>
    <p class="info">TLC Reference: ${feature.properties.tlc_ref}
    </div>`
    layer.bindPopup(content)
}
const pt4_smoke_control_areas_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Registered Date: ${feature.properties.date_registered}
    </div>`
    layer.bindPopup(content)
}
const pt4_sssi_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Registered Date: ${feature.properties.date_registered}
    </div>`
    layer.bindPopup(content)
}
const pt6a_advanced_payments_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Registered Date: ${feature.properties.date_registered}
    </div>`
    layer.bindPopup(content)
}
const pt6a_misc_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Location: ${feature.properties.location}</p> 
    <p class="info">Registered Date: ${feature.properties.date_registered}</p>
    <p class="info">TLC Reference: ${feature.properties.tlc_ref}
    </div>`
    layer.bindPopup(content)
}
const pt10_misc_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    <p class="info">Location: ${feature.properties.location}</p> 
    <p class="info">Registered Date: ${feature.properties.date_registered}</p>
    <p class="info">TLC Reference: ${feature.properties.tlc_ref}
    </div>`
    layer.bindPopup(content)
}

export {
  pt2_misc_Popup,
  pt3_article4_Popup,
  pt3_conservation_areas_Popup,
  pt3_misc_Popup,
  pt3_planning_Popup,
  pt3_planning_notices_Popup,
  pt3_tpo_Popup,
  pt4_ancient_monuments_Popup,
  pt4_common_land_Popup,
  pt4_cpo_Popup,
  pt4_misc_Popup,
  pt4_pipelines_Popup,
  pt4_s38_Popup,
  pt4_smoke_control_areas_Popup,
  pt4_sssi_Popup,
  pt6a_advanced_payments_Popup,
  pt6a_misc_Popup,
  pt10_misc_Popup
}