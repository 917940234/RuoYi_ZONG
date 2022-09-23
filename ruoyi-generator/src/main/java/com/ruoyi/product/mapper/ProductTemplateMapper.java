package com.ruoyi.product.mapper;

import java.util.List;
import com.ruoyi.product.domain.ProductTemplate;

/**
 * 生产数据监控Mapper接口
 * 
 * @author zongyoucheng
 * @date 2022-09-23
 */
public interface ProductTemplateMapper 
{
    /**
     * 查询生产数据监控
     * 
     * @param productId 生产数据监控主键
     * @return 生产数据监控
     */
    public ProductTemplate selectProductTemplateByProductId(Long productId);

    /**
     * 查询生产数据监控列表
     * 
     * @param productTemplate 生产数据监控
     * @return 生产数据监控集合
     */
    public List<ProductTemplate> selectProductTemplateList(ProductTemplate productTemplate);

    /**
     * 新增生产数据监控
     * 
     * @param productTemplate 生产数据监控
     * @return 结果
     */
    public int insertProductTemplate(ProductTemplate productTemplate);

    /**
     * 修改生产数据监控
     * 
     * @param productTemplate 生产数据监控
     * @return 结果
     */
    public int updateProductTemplate(ProductTemplate productTemplate);

    /**
     * 删除生产数据监控
     * 
     * @param productId 生产数据监控主键
     * @return 结果
     */
    public int deleteProductTemplateByProductId(Long productId);

    /**
     * 批量删除生产数据监控
     * 
     * @param productIds 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteProductTemplateByProductIds(String[] productIds);
}
