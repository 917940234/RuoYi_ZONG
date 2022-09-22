package com.ruoyi.product.controller;

import java.util.List;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.product.domain.ProductTemplate;
import com.ruoyi.product.service.IProductTemplateService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 生产数据监测Controller
 * 
 * @author zongyoucheng
 * @date 2022-09-22
 */
@Controller
@RequestMapping("/product/template")
public class ProductTemplateController extends BaseController
{
    private String prefix = "product/template";

    @Autowired
    private IProductTemplateService productTemplateService;

    @RequiresPermissions("product:template:view")
    @GetMapping()
    public String template()
    {
        return prefix + "/template";
    }

    /**
     * 查询生产数据监测列表
     */
    @RequiresPermissions("product:template:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(ProductTemplate productTemplate)
    {
        startPage();
        List<ProductTemplate> list = productTemplateService.selectProductTemplateList(productTemplate);
        return getDataTable(list);
    }

    /**
     * 导出生产数据监测列表
     */
    @RequiresPermissions("product:template:export")
    @Log(title = "生产数据监测", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(ProductTemplate productTemplate)
    {
        List<ProductTemplate> list = productTemplateService.selectProductTemplateList(productTemplate);
        ExcelUtil<ProductTemplate> util = new ExcelUtil<ProductTemplate>(ProductTemplate.class);
        return util.exportExcel(list, "生产数据监测数据");
    }

    /**
     * 新增生产数据监测
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存生产数据监测
     */
    @RequiresPermissions("product:template:add")
    @Log(title = "生产数据监测", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(ProductTemplate productTemplate)
    {
        return toAjax(productTemplateService.insertProductTemplate(productTemplate));
    }

    /**
     * 修改生产数据监测
     */
    @RequiresPermissions("product:template:edit")
    @GetMapping("/edit/{productId}")
    public String edit(@PathVariable("productId") Long productId, ModelMap mmap)
    {
        ProductTemplate productTemplate = productTemplateService.selectProductTemplateByProductId(productId);
        mmap.put("productTemplate", productTemplate);
        return prefix + "/edit";
    }

    /**
     * 修改保存生产数据监测
     */
    @RequiresPermissions("product:template:edit")
    @Log(title = "生产数据监测", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(ProductTemplate productTemplate)
    {
        return toAjax(productTemplateService.updateProductTemplate(productTemplate));
    }

    /**
     * 删除生产数据监测
     */
    @RequiresPermissions("product:template:remove")
    @Log(title = "生产数据监测", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(productTemplateService.deleteProductTemplateByProductIds(ids));
    }
}
